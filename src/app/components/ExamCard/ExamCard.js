import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton'
import FavoriteIcon from 'material-ui-icons/Favorite';
import DownloadIcon from 'material-ui-icons/GetApp';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 24,
        paddingBottom: 24,
        background: grey[900]
    }),
    card: {
        width: 250,
    },
    media: {
        height: 200,
    },
    badge: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    },
    noStyle: {
        textDecoration: "none",
        color: "white"
    }

});

class ExamCard extends Component {

    defaultThumb = "https://www.comic.org.uk/theme/comic/images/pdf-document.png"

    render() {
        return (
            <div>
                <Card className={this.props.classes.card}>
                    <CardMedia
                        className={this.props.classes.media}
                        image={this.props.exam.miniatura === null ? this.defaultThumb : this.props.exam.miniatura}
                        title="Imagem da Prova"
                    />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            {this.props.exam.disciplina}
                        </Typography>
                        <Typography component="p">
                            {this.props.exam.periodo}
                        </Typography>
                        <Typography type="caption" component="p">
                            Upload em {this.props.exam.data_upload}
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <IconButton>
                            <Badge className={this.props.classes.badge} badgeContent={this.props.exam.classificacao} color="accent">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <a href={this.props.exam.pdf} download className={this.props.classes.noStyle}><DownloadIcon /> </a>
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        );
    }

}


export default withStyles(styles)(ExamCard);